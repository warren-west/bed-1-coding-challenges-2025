const rawCustomerData = [
    { id: 1, email: "Alice@Example.com ", status: "active", age: 30 },
    { id: 2, email: null, status: "pending", age: 25 },
    { id: 1, email: "alice@example.com", status: "active", age: 30 },
    { id: 3, email: "bob@work.org", status: "inactive", age: "unknown" },
    { id: 4, email: "  charlie@test.com", status: "ACTIVE", age: 42 },
]

function cleanCustomerData(data) {
    // Fill in the function

    // Step 1: Filter missing fields
    let filteredRecords = data.filter((record) => {
        return !!record.id && !!record.email
    })
    console.log("FILTERED")
    logArray(filteredRecords)
    
    // Step 2: Check whitespaces and casing
    const cleanedRecords = filteredRecords.map((record) => {
        return { ...record,
            email: record.email.trim().toLowerCase(),
            status: record.status.toLowerCase()
        }
    })
    console.log("CLEANED")
    logArray(cleanedRecords)
    
    // for (let record of data) {
        //     record.email = record.email.trim().toLowerCase()
        //     record.status = record.status.toLowerCase()
        // }
        
        const uniqueRecords = new Set(cleanedRecords)
        
        console.log("UNIQUE")
        logArray(uniqueRecords)
    }
    
    cleanCustomerData(rawCustomerData)
    
    function logArray(records) {
        for (let r of records)
        console.log(r)
}