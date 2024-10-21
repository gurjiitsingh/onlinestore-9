This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Integrating features like a recommendation system or user reviews can greatly enhance user experience on your e-commerce site. Consider adding a wishlist feature for users to save items for later, or implementing search filters to help customers find products more easily. Additionally, integrating payment gateways for seamless transactions is essential. What feature are you most excited to implement next?

// next TODO
pagination (understand and impliment)

// TODO

hidden value of form is work in  productForm 
and not work in AddressForm  // search 
(solution in Address form hidden values are taken from session value which are not updated immidetly, and form take null value which case hidden value to be not work)

// TODO
order get total page




// register form
http://localhost:3000/auth/register
server action: actions/auth/signup 


============= shadcn ==============
npx shadcn-ui@latest init  (--------- main instalaton shadcn)

--------- to use card ----------
npx shadcn-ui@latest add card

---- bradcrumb ----------
npx shadcn@latest add breadcrumb

---------- dropdown   ----------
npx shadcn@latest add dropdown-menu






============ Next UI =============

npm i @nextui-org/react
npm i framer-motion

for input
(run this -- npx nextui-cli@latest add input 
 if not installed npm i @nextui-org/react)


-- authentication nextauth 4---

npm install next-auth

npm i bcrypt


--- for product ------

scema validation 
npm i zod


--- for toast pop up ---

npm i react-hot-toast



--- image upload ---


user dashboard ----



npx shadcn-ui@latest add avatar



npx shadcn-ui@latest add command


----- for icons --------
npm install lucide-react
npm i react-icons
npm i @radix-ui/react-slot

npm i radix-ui

npm i @radix-ui/react-icons

npm i cmdk

--- shadch data table ---
npx shadcn-ui@latest add table
npm install @tanstack/react-table     (dependancy)


------- charts ------

 npm install recharts

 ---- pagination ---
 npx shadcn-ui@latest add pagination


 ------ form and vailidation -
npx shadcn-ui@latest add form
npm i zod
 npm i @hookform/resolvers


 npx shadcn-ui@latest add input
 npx shadcn-ui@latest add label
 npx shadcn-ui@latest add textarea


 -------- for tabs ---
 npx shadcn-ui@latest add tabs




 ---------- for authenticate purpose--------

npm i mongoose
 npm i nodemailer

 ts typs for nodemailer
 npm i ---save-dev @types/nodemailer

 -------------
 ------ form ------
npm i react-router-dom
npm i react-redux

------- for deep object stringify -----
npm i json-prune


========= cloudinary ========
npm i cloudinary

next.config.mjs -> add next lines

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
      
  };
  
  export default nextConfig;