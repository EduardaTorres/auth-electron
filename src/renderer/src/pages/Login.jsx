import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import API from '../utils/api';

const loginValidator = yup
  .object()
  .shape({
    email: yup.string()
    .email('Campo deve ser um e-mail')
    .required('E-mail obrigatório'),
    password: yup.string()
    .min(6,"No minimo 6 digitos")
    .required("Campo Obrigatório"),
  })
  .required();

function Login() {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });


    async function submit(values){
        try {
            
            const {data , status} = await API.post('login', values)
            console.log({data, status})
            localStorage.setItem('token', data.token)
            navigate('/dashboard');
        } catch (error) {
            console.log(error.response.data)
            
        }
    }


    return <form onSubmit={handleSubmit((values)=> submit(values))}>
       <div className="min-h-screen flex items-center justify-center">
       
        <div className="campo">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2" >E-mail</label>
            <input {...register('email')} name="email" type="email" id="email" placeholder="seu email"/>
            {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="campo">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2" >Senha</label>
            <input {...register('password')} name="password" type="password" id="password" placeholder="sua senha"/>
            {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Entrar</button>

        </div>
    </form>;
}

export default Login;