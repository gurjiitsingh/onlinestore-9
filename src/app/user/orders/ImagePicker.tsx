'use client'
import { Button } from '@/components/ui/button'
import { readFile } from 'fs';
import Image from 'next/image';
import { useRef, useState } from 'react'

const ImagePicker = ({lable, name}:{lable:string, name:string}) => {
const [pickedImage, setPickedImage ] = useState<ArrayBuffer | undefined>();
  const imageInputRef = useRef<HTMLInputElement>(null);

function imageHandler(){

 imageInputRef.current.click();
 //console.log("tee")

}

function handleImageChange(event:any){
const file = (event!.target as HTMLInputElement)!.files[0];

if(!file){
 // setPickedImage(null);
  return;
}

const fileReader = new FileReader();
fileReader.onload = () =>{
  setPickedImage(fileReader.result);
// console.log(fileReader.result)
};
fileReader.readAsDataURL(file);

} 




// function handleImageChange(event:React.FormEvent<HTMLInputElement>){
// const target = event.target as HTMLInputElement & {
//   files: FileList;
// };

// console.log(target.files[0]);

// } 

  return (
   <>
     <label className="w-full flex">
      <div className='w-[150px] h-[200px]'>
      {!pickedImage && <p>No imaged picked jet</p>}
      {pickedImage && <Image 
      className='w-[150px] h-[200px]'
      src={pickedImage} 
      alt="Image"
      width={200}
      height={200}
       />}
</div>
              <div className="text-left w-[200px]">Upload Image</div>
              <input
              
                type="file"
                name={name}
                id={name}
                ref={imageInputRef}
                accept='image/png image/jpg'
                className="hidden border-2"
                onChange={handleImageChange}
                // multiple --- for multiple images upload
              />
              <Button onClick={imageHandler} type="button">Pick an Image</Button>
            </label>
   
   
   </>
  )
}

export default ImagePicker