import React from 'react';

function Login({setIsLoggin}) {


  const [email,setEmail] =React.useState('')
  const [password,setPassword] =React.useState('')

  let users = [
    {
      email: 'didem@lov.com',
      password: 'didem123'
    },
    {
      email: 'sezer@lov.com',
      password: 'sezer123'
    }
  ];

  const handleSubmit = () => {
    users.forEach(element => {
        if(element.email === email && element.password === password){
          setIsLoggin(true)
          localStorage.setItem('isLoggin',1)
          localStorage.setItem('email',email)
        }
    });

  } 
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white login" style={{
                borderRadius: '1rem',
                height: '100%',
              }}>
                <div className="card-body p-5 text-center" >
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <p className="text-white-50 mb-5">
                    Harika bir sohbet yapmak için giriş yapın.
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label"htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        placeholder="Şifre"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label"htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>

                 
                    <button
                      className="btn btn-outline-light btn-lg px-5 w-100"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Giriş Yap
                    </button>
                 
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
