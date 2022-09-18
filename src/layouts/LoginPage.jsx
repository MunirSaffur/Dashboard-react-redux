import React, { useState } from 'react'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  Input,
  InputRightElement,
  SlideFade
} from '@chakra-ui/react'
import { ChevronDownIcon, ViewIcon,  } from '@chakra-ui/icons'
import { useHistory } from "react-router-dom";
// reducers
import { LOGIN } from '../features/dataCenter/dataSlice'
import { useDispatch } from 'react-redux';
// img and icon
import Mobile from '../asstes/images/icons/Mobile.svg'
import Identify from '../asstes/images/icons/Identify.svg'
import Person from '../asstes/images/icons/Person.svg'
import Logo from '../asstes/images/logo.svg'
import Loading from '../components/Loading';

export default function LoginPage() {
  const dispatch = useDispatch()
  const history = useHistory();
  const [showpassword, setShowpassword] = useState(false);
  const [useTypeLabel, setUserTypeLabel] = useState('Kullanıcı Tipi');
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({
    userType: false,
    username: false,
    password: false
  });
  const [loginData, setLoginData] = useState({
    userType: "",
    username: "",
    password: ""
  });

  const handleClick = () => setShowpassword(!showpassword);

  // handle user type 
  const handleUserType = (userType) => {
    setUserTypeLabel(userType)
    const newLoginData = { ...loginData };
    newLoginData.userType = userType
    setLoginData(newLoginData)
    console.log(loginData)
  }

  // handle username and password
  const handleUserNameAndPassword = (e, inputType) => {
    if (inputType === "username") {
      const newLoginData = { ...loginData };
      newLoginData.username = e.target.value
      setLoginData(newLoginData)
      setError(false)
    } else if (inputType === "password") {
      const newLoginData = { ...loginData };
      newLoginData.password = e.target.value
      setLoginData(newLoginData)
      setError(false)
    }
    console.log(loginData)
  }

  //  handle login action
  const logIn = () => {
    if (loginData.userType === "") {
      const newErrorObj = { ...error };
      newErrorObj.userType = true;
      setError(newErrorObj)
    } else if (loginData.username === "") {
      const newErrorObj = { ...error };
      newErrorObj.username = true;
      setError(newErrorObj)
    } else if (loginData.password === "") {
      const newErrorObj = { ...error };
      newErrorObj.password = true;
      setError(newErrorObj)
    } else if(loginData.userType !== "" && loginData.username !== "" && loginData.password !== "") {
      dispatch(LOGIN(loginData))
      setShowLoader(true)
      setInterval(() => {
        history.push("/dashboard")
      }, 2000)
    }
  }

  return (
    <div className='login-page h-100'>
      <div className='row h-100 w-100 m-0'>
        <div className='col-12 col-md-8 col-lg-9 h-md-100 login-side'>
          <div className='container'>
            {/* header */}
            <div className='d-flex justify-content-between mt-4'>
              <img src={Logo} />
              <Button variant='outline' className='register'>
                KAYIT OL
              </Button>
            </div>
            {/* login form */}
            <div className='login-form'>
              <h1>Kullanıcı Girişi</h1>
              <p>Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.</p>

              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className={'text-start w-100 login-form-input border ' + (error.userType ? ' border-1 border-danger' : 'border-0')} my="2" mt="5">
                  {useTypeLabel}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => { handleUserType("Yönetici") }}>Yönetici</MenuItem>
                  <MenuItem onClick={() => { handleUserType("Çalışan") }}>Çalışan</MenuItem>
                </MenuList>
              </Menu>
              <Input placeholder='Kullanıcı Adı' my="2"
                className={'login-form-input border ' + (error.username ? ' border-1 border-danger' : 'border-0')}
                onChange={(e) => { handleUserNameAndPassword(e, "username") }} />
              <InputGroup size='md' my="2">
                <Input
                  pr='4.5rem'
                  type={showpassword ? 'text' : 'password'}
                  placeholder='Şifren'
                  className={'login-form-input border ' + (error.password ? ' border-1 border-danger' : 'border-0')}
                  onChange={(e) => { handleUserNameAndPassword(e, "password") }}
                />
                <InputRightElement width='4.5rem'>
                  <ViewIcon onClick={handleClick} />
                </InputRightElement>
              </InputGroup>
              <div className='d-flex justify-content-between mt-4'>
                <a href='#' className='forget-password' righticon={<ChevronDownIcon className='show' />}>Şifremi Unuttum</a>
                <Button variant='outline' className='btn login' onClick={() => { logIn() }}>
                  GİRİŞ YAP
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4 col-lg-3 h-100 py-2'>
          {/* login sidebar */}
          <SlideFade in={true} offsetX='30px' offsetY='0px'>
          <div className='login-sideBar'>
            <h2>Nasıl giriş<br /> yaparım?</h2>
            <ul>
              <li><img src={Mobile} /> Telefonunuzdan<br />
                Fups uygulamasını açın.</li>
              <li><img src={Person} /> Profil fotoğrafınızdaki<br />
                QR ikonuna basın.</li>
              <li><img src={Identify} /> QR Kodu okutarak internet şubeye giriş yapabilirsiniz.</li>
            </ul>
          </div>
          </SlideFade>
        </div>
      </div>
      {showLoader && <Loading />}
    </div>
  )
}
