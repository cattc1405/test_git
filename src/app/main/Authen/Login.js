import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/UserAPI';


const Login = (props) => {
    const { navigation } = props

    const appState = useSelector(state => state.app)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('example@fpoly.com');
    const [password, setPassword] = useState('Fpoly@123');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [securePassword, setSecurePassword] = useState(true)

    // const {isLogin, setIsLogin} = useContext(AppContext);

    const changeEmailTitle = data => {
        setEmail(data);
        setEmailError('');
    };

    const changePasswContent = data => {
        setPassword(data);
        setPasswordError('');
    };

    const validateEmail = email => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };

    const handleLogin = () => {
        if (!validateEmail(email)) {
            setEmailError('Vui lòng nhập đúng định dạng email');
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Vui lòng nhập mật khẩu');
        } else {
            setPasswordError('');
        }

        if (validateEmail(email) && password) {
            try {
                const body = { email, password }
                dispatch(login(body))

            } catch (error) {

            }

            // alert('Đăng nhập thành công');
            // setIsLogin(true)
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.imLogo}
                    source={require('../../../../assets/images/anhnen.png')}
                />
                <View style={styles.ViewT}>
                    <Text style={styles.chao}>Chào mừng bạn</Text>
                    <Text style={styles.textDn}>Đăng nhập tài khoản</Text>
                </View>


                <View style={styles.inputcontai}>
                    <TextInput
                        value={email}
                        placeholder="Email"
                        style={styles.inputNormal}
                        onChangeText={setEmail}
                    />
                    {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}
                </View>
                <View style={styles.inputcontai}>
                    <TextInput
                        value={password}
                        placeholder="Password"
                        style={styles.inputNormal}
                        onChangeText={setPassword}
                        secureTextEntry={securePassword}
                    />
                    {!!passwordError && (
                        <Text style={styles.errorText}>{passwordError}</Text>
                    )}
                    <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}
                        style={styles.eye}>
                        {
                            securePassword ?
                                <Image
                                    source={require('../../../../assets/images/eye.png')}
                                /> :
                                <Image
                                    source={require('../../../../assets/images/eye.png')}
                                />
                        }

                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image
                            style={styles.imLogotich}
                            source={require('../../../../assets/images/tich.png')}
                        />
                        <Text>  Nhớ tài khoản</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ color: 'green' }}>Forgot Passwork ?</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.BtnText}>Đăng Nhập</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent: 'center' }}>
                    <Text style={styles.gach}></Text>
                    <Text>Hoặc</Text>
                    <View style={styles.gach}></View>
                </View>


                <View style={styles.row}>
                    <Image
                        style={styles.imLogof}
                        source={require('../../../../assets/images/logog.png')}
                    />
                    <Image
                        style={styles.imLogof}
                        source={require('../../../../assets/images/logof.png')}
                    />
                </View>

                <View style={styles.row}>
                    <Text>Bạn không có tài khoản  </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.taoTK}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>
    );
};

export default Login;

const styles = StyleSheet.create({
    eye: {
        position: 'absolute',
        right: 15,
        top: 13
    },
    textDn: {
        fontSize: 18,
        color: 'black',
        fontWeight: '400'
    },
    chao: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        lineHeight: 50
    },
    ViewT: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    taoTK: {
        color: 'green'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    imLogof: {
        width: 32,
        height: 32,
        margin: 13
    },
    gach: {
        width: '36%',
        height: 1,
        backgroundColor: 'green',
        margin: 15
    },
    imLogo: {
        width: '100%',
        height: 350,
        marginTop: -10
    },
    container: {
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputcontai: {
        width: '90%',
        marginTop: 1,
    },
    inputNormal: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 15,
        marginTop: 10,
        alignItems: 'center',
        width: '90%'
    },
    BtnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
});
