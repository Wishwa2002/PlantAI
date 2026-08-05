import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    console.log('Welcome to the PlantAI');
})

app.listen(3000,()=>{
    console.log("Plant AI Backend is running on https://localhost.3000");
});
export default app;