import React from 'react'

const Register = () => {
  return (
    <div>
      <section class="form-main">
        <div class="form-content">
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <div class="circle-3"></div>
            <div class="box">
                <h3>Crear Cuenta</h3>
                <form action="">
                    <div class="input-box">
                        <input type="text" placeholder="Nombre" class="input-control"/>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Email" class="input-control"/>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="password" class="input-control"/>
                    </div>
                    <button type="submit" class="btn"><a href="MF.html">Crear</a></button>
                </form>
                <p>Ya tienes una cuenta? <a href="Index.html" class="gradient-text">Iniciar Sesion</a></p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Register
