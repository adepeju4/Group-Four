import { useState } from "react";
import styles from "../stylesheets/product.module.css";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import { createReviewAsync } from "../redux/action/productsAction";

const initForm = {
  rating: 0,
  title: "",
  comment: "",
  author: "",
};

const reviewForm = ({ dishId }) => {
  const dispatch = useDispatch();
  // const [isPending, setIsPending] = useState(false);
  const [form, setForm] = useState(initForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      dishId,
    };
    dispatch(createReviewAsync(data));
    setForm(initForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleRate = (rate) => {
    setForm((prevForm) => ({
      ...prevForm,
      rating: rate,
    }));
  };

  return (
    <>
      <div className={styles.createReview}>
        <header>Post a review</header>
        <form className={styles.reviewForm} onSubmit={handleSubmit}>
          <label htmlFor="rating">Rate this meal</label>
          <StarRating handleRate={handleRate} />

          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            className={styles.reviewTitle}
            value={form.author}
            onChange={handleChange}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className={styles.reviewTitle}
            value={form.title}
            onChange={handleChange}
          />
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            className={styles.reviewComment}
          ></textarea>
          <button className={styles.submitReview}>Add Review</button>
        </form>
      </div>
    </>
  );
};

export default reviewForm;
