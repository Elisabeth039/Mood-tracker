import '../styles/ExportButton.css';
import '../App.css';

export default function ExportButton ({selectedMonth}) {
    const handleExport = () =>{
        const entries = JSON.parse(localStorage.getItem('moodEntries') || '[]');

        const [year, month] = selectedMonth.split('-').map(Number);
        const monthEntries = entries.filter(entry => {
           return entry.date.startsWith(`${year}-${String(month).padStart(2, '0')}`)
        });

        if (monthEntries.length === 0) {
            alert ('No data to export this month!');
            return;
        };

        const exportData = {
            month: selectedMonth,
            exportDate: new Date().toISOString(),
            totalEntries: monthEntries.length,
            entries: monthEntries
        };

        const jsonString = JSON.stringify(exportData, null, 2)

        const blob = new Blob([jsonString], {type: 'application/json'})
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `mood-tracker-${selectedMonth}.json`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }


    return (
        <div>
            <button className='export-btn' onClick={handleExport}>Export This Month ↓</button>
        </div>
    )
}