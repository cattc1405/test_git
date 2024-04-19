import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AxiosInstance from '../../../helper/AxiosInstance';


const Register = (props) => {
    const { navigation } = props
    const [email, setEmail] = useState('example@fpoly.com');
    const [password, setPassword] = useState('Fpoly@123');
    const [dateOfBirth, setDateOfBirth] = useState('10/10/2020');

    //     const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [dateOfBirth, setDateOfBirth] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');


    const [securePassword, setSecurePassword] = useState(true)

    const changeEmailTitle = data => {
        setEmail(data);
        setEmailError('');
    };

    const changeBirthTitle = data => {
        setDateOfBirth(data);
        setNameError('');
    };

    const changePasswContent = data => {
        setPassword(data);
        setPasswordError('');
    };


    const addData = async () => {

        // console.log("đã bấm")
        if (!email) {
            setEmailError('Vui lòng nhập email');
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Vui lòng nhập mật khẩu');
        } else {
            setPasswordError('');
        }

        if (!dateOfBirth) {
            setNameError('Vui lòng nhập ngày sinh');
        } else {
            setNameError('');
        }

        if (email && password && dateOfBirth) {
            console.log('asc')
            const body = {
                email: email,
                password: password,
                dateOfBirth: dateOfBirth
            }

            // const response = await AxiosInstance().post('/users/register', body);
            // console.log(response)

            // if (response.code == 1) {
            //     alert('Đăng ký thành công');
            //     console.log('thành công')
            //     navigation.navigate('Login')
            // } else {
            //     Alert.alert('đăng ký không thành công')
            // }

            // console.log(body)
            const response = await AxiosInstance().post('/eRegister.php')
            console.log(response)

            if (response.code == 1) {
                Alert.alert('đăng ký thành công')
                // console.log(response)
            } else {
                Alert.alert('đăng ký không thành công, User đã tồn tại')
            }

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
                    <Text style={styles.chao}>Đăng ký</Text>
                    <Text style={styles.textDn}>Tạo tài khoản</Text>
                </View>


                <View style={styles.inputcontai}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        style={styles.inputNormal}
                        onChangeText={data => changeEmailTitle(data)}
                    />
                    {!!nameError && <Text style={styles.errorText}>{emailError}</Text>}
                </View>

                <View style={styles.inputcontai}>
                    <TextInput
                        placeholder="Password"
                        value={password}

                        style={styles.inputNormal}
                        onChangeText={data => changePasswContent(data)}
                    />
                    {!!emailError && <Text style={styles.errorText}>{passwordError}</Text>}
                </View>
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

                <View style={styles.inputcontai}>
                    <TextInput
                        placeholder="Date of birth"
                        value={dateOfBirth}

                        style={styles.inputNormal}
                        onChangeText={data => changeBirthTitle(data)}
                        secureTextEntry={securePassword}
                    />
                    {!!passwordError && (
                        <Text style={styles.errorText}>{nameError}</Text>
                    )}


                </View>

                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Để đăng ký tài khoản, bạn đồng ý {''}
                        <Text style={{ textAlign: 'center', color: 'green', textDecorationLine: 'underline' }}>Terms & Conditions</Text> and <Text style={{ textAlign: 'center', color: 'green', textDecorationLine: 'underline' }}>Privacy Policy</Text>
                    </Text>

                </View>

                <TouchableOpacity style={styles.button} onPress={addData}>
                    <Text style={styles.BtnText}>Đăng ký</Text>
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
                    <Text>Bạn đã có tài khoản  </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.taoTK}>Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>
    );
};

export default Register;

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
        marginTop: -90,
        resizeMode: 'stretch'
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