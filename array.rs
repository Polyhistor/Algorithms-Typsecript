fn main(){
    let numbers : [i32:5] = [10,20,30,40,50]
    
    for num in &numbers {
        println!("Number: {}", num);
    }

}