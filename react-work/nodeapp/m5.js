class Message{
    m1(){
        console.log("m1-executed...");
    }
    m2(){
        console.log("m2-executed...");
    }
}

//export default Message;

export default new Message();