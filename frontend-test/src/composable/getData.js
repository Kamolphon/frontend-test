const getAnnouncements= async () => {
    try {
        const res = await fetch(`http://lvm64002.sit.kmutt.ac.th:8080/api/announcements`)
        
        if (res.status === 200) {
            const announcement = await res.json()
            console.log('All Successfully')
            return announcement
        }else if(res.status !== 200){
            const error = await res.json()
            alert(error.message)
        }
    } catch (error) {
        console.log(`ERROR cannot read data: ${error}`);
    }   
}

export{ getAnnouncements}