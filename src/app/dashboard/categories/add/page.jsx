import styles from "@/app/ui/dashboard/categories/addCategory/addCategory.module.css";

const AddCategoryPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <button type="submit">Utwórz</button>
      </form>
    </div>
  );
};

export default AddCategoryPage;
