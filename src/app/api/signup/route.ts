import { NextRequest, NextResponse }  from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
import  User from '@/models/userModel';
import { hashPassword } from '@/lib/auth';

connect()
//export async function POST(request: NextRequest){
export async function POST(req: NextRequest){
    console.log("-------- in signup route --------------")

    // const params = req.nextUrl.searchParams;
    // console.log(params)

    try {
        const ReqBody = await req.json();

        const { username, email, password } = ReqBody;
      
//console.log(req)
    const user = User.findOne({email});

    //  if(user){
    //   return  NextResponse.json({error: "User allready exists", status: 400})
    //  }
 //   console.log(email,password,username);
const hashedPassword = hashPassword(password);

const newUser = new User({
    username,email,password,isVerfied: true,isAdmin:false
   
})

const savedUser = await newUser.save()
//console.log(savedUser);

//   //send verification email
        
    } catch (error) {
        
    }

return NextResponse.json({data:"it workd"})

}