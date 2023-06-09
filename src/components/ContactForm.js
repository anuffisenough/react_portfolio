// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

const ContactForm = () => {
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });
  // const [addUser, { error, data }] = useMutation(ADD_USER);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);

    // try {
    //   const { data } = await addUser({
    //     variables: { ...formState },
    //   });

  //     Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //     console.log("Please try again.");
  //   }

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Contact Christopher</h4>
          <div className="card-body">

              <form>
                <input
                  className="form-input"
                  placeholder="Your Name"
                  name="name"
                  type="text"
                  // value={formState.name}
                  // onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  // value={formState.email}
                  // onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Message for Christopher"
                  name="message"
                  type="message"
                  // value={formState.password}
                  // onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>

            {/* {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
                <br />
                Please try again.
              </div> */}
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
