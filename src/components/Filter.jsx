import { Formik, Field, Form} from "formik";
import PropTypes from "prop-types";
import * as yup from "yup";
import css from './Filter.module.css'

const FilterSchema = yup.object().shape({
  filter: yup.string().required(),
});

const Filter = ({ id, onChangeFilter }) => {
  return (
    <>
      <p className={css['filter-description']}>Find contacts by name</p>
      <Formik
        initialValues={{ filter: "" }}
        validationSchema={FilterSchema}
      >
        {({ values, handleChange }) => (
           <Form autoComplete='off'>
          <Field
            id={id}
            name="filter"
            type="search"
            value={values.filter}
            onChange={(evt) => {
              handleChange(evt);
              onChangeFilter(evt);
            }}
            className={css['filter-input']}
          /></Form>
        )}
        
      </Formik>
    </>
  );
};

Filter.propTypes = {
  id: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
