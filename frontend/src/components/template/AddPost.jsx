import { useQuery } from "@tanstack/react-query"
import { getCategory } from "../../services/admin"
import { useState } from "react"
import styles from "./AddPost.module.css"
import { getCookie } from "../../utils/cookie"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"


function AddPost() {
    const {data} = useQuery(["get-categories"], getCategory)
    const [form, setForm] = useState({
        title: "",
        content: "",
        category: "",
        city: "",
        amount: null,
        images: null
    })
    const changeHandler= (event)=>{
        const name = event.target.name
        if(name !== "images"){
            setForm({...form, [name]: event.target.value})
        }else{
            setForm({...form, [name]: event.target.files[0]})
        }
        
    }

    const addHandler = event=>{
        event.preventDefault()
        console.log('Form data:', form)
        const formData = new FormData()
        for(let i in form){
            formData.append(i,form[i])
        }
        
        const token = getCookie("accessToken")
        axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, formData,{
            headers:{
                "Content-Type": "multipart/form-data",
                Authorization:`bearer ${token}`
            }
        }).then((res)=> toast.success(res.data.message || "آگهی با موفقیت ثبت شد"))
        .catch((error)=> toast.error("مشکلی پیش آمده کسگم"))
       
    }
    

  return <form onChange={changeHandler} className={styles.form}>
  <h3>افزودن آگهی</h3>
  <label htmlFor="title">عنوان</label>
  <input type="text" name="title" id="title"/>
  <label htmlFor="content">توضیحات</label>
  <textarea name="content" id="content"></textarea>
  <label htmlFor="amount">قیمت</label>
  <input type="Number" name="amount" id="amount"/>
  <label htmlFor="city">شهر</label>
  <input type="text" name="city" id="city"/>     
  <label htmlFor="category"></label>

  <select name="category" id="category">
    {data?.data.categories.map((i) => (
        <option key={i._id} value={i._id}>{i.name}</option>
    ))}
</select>

  <label htmlFor="images">عکس</label>
  <input type="file" name="images" id="images" />
  
  <button onClick={addHandler}>ایجاد آگهی</button>
  
</form>
}

export default AddPost