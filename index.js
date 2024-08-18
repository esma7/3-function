

// const array =JSON.parse(localStorage.getItem("names")) || []

// const getUsername = (arr, name)=>{

// arr.push(name);     

// localStorage.setItem("names", JSON.stringify(arr));

// console.log( JSON.parse(localStorage.getItem("names")));

// }

// getUsername(array, "sabah")



////////////////////////////////////////delelfunc


// const deleteUser = (name)=>{
//     let array = JSON.parse(localStorage.getItem("names")) || []
//     let count = 0;
//     try {
        
//         array.forEach((item, index)=>{
            
//             if(item === name){
//                 array.splice(index, 1)
//                 count = 1;
//             }
//         })

//         localStorage.setItem("names", JSON.stringify(array))

//         if(count == 0){
//             throw new Error(`${name} adli data yoxdi`);    
//         }

           
//         } catch (error) {

//         console.log(error.message);
        
//     }

// }

// deleteUser("adam")


// const currentLocalStroge = ()=> console.log("current data:", JSON.parse(localStorage.getItem("names")));

// currentLocalStroge()
