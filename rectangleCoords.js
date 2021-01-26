//do not consider time complexity in solution

function findRectangle(image){
    let result = [];
    //loop through the arrays until we find an array that includes 0
    for(let i = 0; i < image.length; i++){
      if(image[i].includes(0)){
        let rows = image[i];
  //       console.log(`i: ${i}`);
        result.push(i);
  //       console.log(result)
        for(let j=0; j < rows.length; j++){
  //         console.log(`second loop: ${rows[j]}`)
          if(rows[j] === 0){
  //           console.log(`j: ${j}`)
            if(result.length === 1){
              result.push(j);
  //             console.log(result)
            }
          break;
          }
        }
        for(let k=image[i].length-1; k>=0; k--){
          if(rows[k] === 0){
  //           console.log(`k: ${k}`)
            if(result.length === 3){
            result.push(k)
  //           console.log(result)
            }
            break;
          }
        }
      }
    }
    console.log(`results: ${result}`);
    return result;
  }
  
  findRectangle(image1)