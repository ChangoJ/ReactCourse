export const fileUpload = async(file : File) =>{

    if(!file) throw new Error('No hay ningun archivo a subir');

    const CloudUrl = 'https://api.cloudinary.com/v1_1/dfrttgbhg/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(CloudUrl, {
            method: 'POST',
            body: formData
        });

        if(!resp.ok) throw new Error('No se pudo subir la imagen');

        const cloudResp = await resp.json();

        console.log(cloudResp);
        return cloudResp.secure_url;

    }catch (error) {
        console.log(error);
        throw new Error(error as string );
    }

}