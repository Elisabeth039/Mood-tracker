import {useEffect, useState} from 'react';
import '../styles/StatCards.css'
import '../App.css'

export default function StatCards ({selectedMonth}) {
    const [stats, setStats] = useState({
        totalLogges: '0/0',
        longestStreak: 0,
        averageMood: '—',
        mostCommonWth: '—'
    });

    const getDaysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    };

    const calculateLongestStreak = (entries) =>{
        if (entries.length === 0) return 0;

        const dates = entries.map(e => e.date).sort();

        let maxStreak = 1;
        let currentStreak = 1;

        for( let i = 1; i < dates.length; i++) {
            const prev = new Date(dates[i - 1]);
            const curr = new Date(dates[i]);

            const diffDays = Math.ceil((curr - prev) / (1000 * 60 * 60 * 24));

            if (diffDays ===1) {
                currentStreak++
                maxStreak = Math.max(maxStreak, currentStreak);
            } else {
                currentStreak = 1;
            }
        }
        return maxStreak;
    };

    useEffect(() => {
        if(selectedMonth) {
            calculateStatsForMonth(selectedMonth);
        }
    }, [selectedMonth]);

    const calculateStatsForMonth = (monthStr) =>{
        const [year, month] = monthStr.split('-').map(Number);
        const entries = JSON.parse(localStorage.getItem('moodEntries') || '[]')

        const monthEntries = entries.filter(entry => {
            return entry.date.startsWith(`${year}-${String(month).padStart(2, '0')}`)
        });

        if (monthEntries.length === 0) {
            setStats({
                 totalLogges: `0/${getDaysInMonth(year, month)}`,
                 longestStreak: 0,
                 averageMood: '—',
                 mostCommonWth: '—'
            })
            return;
        }

        const loggedDays = monthEntries.length;
        const daysInMonth = getDaysInMonth(year, month);
        const totalLogged = `${loggedDays}/${daysInMonth}`;

        const moodSum = monthEntries.reduce((sum, entry) => sum + (entry.mood || 0), 0);
        const averageMood = (moodSum / monthEntries.length).toFixed(1);

        const weatherCount = {};
        monthEntries.forEach(entry =>{
            if (entry.weather) {
                weatherCount[entry.weather] = ( weatherCount[entry.weather] || 0) + 1;
            }
        });

        let mostCommon = '—';
        let maxCount = 0;

        Object.keys(weatherCount).forEach(w => {
            if (weatherCount[w] > maxCount) {
                maxCount = weatherCount[w];
                mostCommon = w;
            }
        });

        const weatherEmojis = {
          sunny: '☀️',
          cloudy: '☁️',
          rainy: '🌧️',
          snowy: '❄️',
          windy: '🌬️'
        };

        const mostCommonEmoji = weatherEmojis[mostCommon] || '—';

        const longestStreak = calculateLongestStreak(monthEntries);

        setStats ({
            totalLogges: totalLogged,
            longestStreak: longestStreak,
            averageMood: averageMood,
            mostCommonWth: mostCommonEmoji
        });
    };

    return(
        <div className='cards-container'>
            <div className='card' id='card-1'>
                <p>Total days logged</p>
                <div className='card-info 'id='total-logges'>{stats.totalLogges}</div>
            </div>
            <div className='card' id='card-2'>
                <p>Longest streak</p>
                <div className='card-info' id='streak'> {stats.longestStreak}🔥</div>
            </div>
            <div className='card' id='card-3'>
                <p>Average mood</p>
                <div className='card-info' id='ave-mood' 
                style={{
                    color: stats.averageMood !== '—' 
                    ? `hsl(${(stats.averageMood /10) * 120}, 80%, 50%)`
                    : '#666'
                }}
                >{stats.averageMood}</div>
            </div>
            <div className='card' id='card-4'>
                <p>Most common weather</p>
                <div className='card-info' id='common-wth'>{stats.mostCommonWth}</div>
            </div>
        </div>
    )
}