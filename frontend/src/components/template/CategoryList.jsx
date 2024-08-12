import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteCategory, getCategory } from "../../services/admin"
import Loader from "../modules/Loader"
import styles from "./CategoryList.module.css"
function CategoryList() {
    const queryClient = useQueryClient();

    const {data, isLoading} = useQuery(["get-categories"], getCategory)
     /* console.log({data, isLoading}); */ 
     const { mutate: deleteMutate, isLoading: isDeleting } = useMutation(deleteCategory, {
        onSuccess: () => {
          queryClient.invalidateQueries(["get-categories"]);
        }
      });
    
      const handleDelete = (id) => {
        if (window.confirm("آیا مطمئن هستید که می‌خواهید این کتگوری را حذف کنید؟")) {
          deleteMutate(id);
        }
      };
  return (
    <div className={styles.list}>{isLoading ? <Loader /> :
        data.data.categories.map((i) => <div key={i._id}>
            <img src={`${i.icon}.svg`} alt="" />
            <h5>{i.name}</h5>
            <p>slug:{i.slug}</p>
            <button onClick={() => handleDelete(i._id)} disabled={isDeleting}>
              حذف
            </button>
             </div>)
    
    }</div>
  )
}

export default CategoryList