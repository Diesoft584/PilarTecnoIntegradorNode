import mongoose from 'mongoose';

export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION as string);
        console.log('Conectado a MongoBD!') 
    }catch (error){
        console.log('Error no se puede conectar');
        throw error;
    }
}
