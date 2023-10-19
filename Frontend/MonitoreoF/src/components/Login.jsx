import React from 'react'

const Login = () => {
  return (
    <div>
      <section class="form-main">
        <div class="form-content">
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <div class="circle-3"></div>
            <div class="box">
                <h3>Bienvenido</h3>
                <form action="">
                    <div class="input-box">
                        <input type="text" placeholder="Email" class="input-control"/>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="password" class="input-control"/>
                        <div class="input-link">
                        //
                        </div>
                    </div>
                    <button type="submit" class="btn">
                        <a href="MF.html">Iniciar Sesion</a>
                    </button>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Login
