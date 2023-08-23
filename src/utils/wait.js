
const wait = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> reject('Error: Rejected'), 5000);
    });
};

export default wait;