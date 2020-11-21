import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik } from 'formik';

const CountriesSearch = () => {

    const initialValues = {
        searchTerm: '',
    };

    return (
        <div>
            <div className="col-md-12 main-dashboard-component">
                <h2>Search Countries</h2>
                <div className="form-container">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            actions.setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            touched,
                        }) => (
                            <form
                                className="row"
                                onSubmit={e => {
                                    e.preventDefault();
                                    handleSubmit();
                                }}
                            >
                                <div
                                    className={`floating-label-component col-md-8 ${
                                        touched.searchTerm && errors.searchTerm ? 'error' : ''
                                    }`}
                                >
                                    <input
                                        type="text"
                                        name="searchTerm"
                                        id="searchTerm"
                                        className={`form-control floating-label-input ${
                                            touched.searchTerm && errors.searchTerm
                                                ? 'error-input'
                                                : ''
                                        }`}
                                        placeholder="Search Term"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.searchTerm}
                                    />
                                    <span className="floating-label left-15">
                                        Search Term
                                    </span>
                                    {touched.searchTerm && errors.searchTerm && (
                                        <span className="error-label">
                                            {errors.searchTerm}
                                        </span>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn sc-btn-primary col-md-4"
                                >
                                    Search Countries
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
            <Link className="back-btn" to="/dashboard"><span className="icon-arrow-left" />Back To Dashboard</Link>
        </div>
    );
};

export default connect(null, null)(CountriesSearch);

