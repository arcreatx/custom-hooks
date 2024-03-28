import React from 'react'

function Language({language,setLanguage}) {
    return (
        <div>
            <label htmlFor="language">Language:</label>
            <input
                id="language" 
                type="text" 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)} 
            />
        </div>
    )
}

export default Language