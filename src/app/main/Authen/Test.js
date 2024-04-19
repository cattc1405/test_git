import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import AxiosInstance from '../../../helper/AxiosInstance';

const Test = (props) => {
    const { navigation } = props; //chuyen man hinh

    const [date, setDate] = useState('ss@gmail.com')
    const [email, setemail] = useState('1213')
    const [pass, setpass] = useState('13233')


    const onPressDangky = async () => {
        try {
            // Kiểm tra định dạng email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                Alert.alert('Địa chỉ email không hợp lệ');
                return;
            }
            // Kiểm tra pass ít nhất 3 ký tự
            if (pass.length < 3) {
                Alert.alert('Mật khẩu phải có ít nhất 3 ký tự');
                return;
            }

            // Kiểm tra pass ít nhất 3 ký tự
            if (date.length == 0) {
                Alert.alert('Ngày không được để trống');
                return;
            }

            const body = {
                email: email,
                password: pass,
                date: date
            }
            console.log(body)
            const response = await AxiosInstance().post('/eRegister.php', body)
            console.log(response)
            // console.log(body)

            if (response.code == 1) {
                Alert.alert('đăng ký thành công')
                // console.log(response)
            } else {
                Alert.alert('đăng ký không thành công, User đã tồn tại')
            }

        } catch (error) {
            console.log('đăng ký không thành công', error)
            Alert.alert('đăng ký không thành công')
        }
    }

    const [password, setPassword] = useState(true)

    const Cancel = () => {
        setDate('')
        setPassword('')
        setemail('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                {/* <Image
                    style={styles.Logoimg}
                    source={require('../../assets/images/baove/LogoOo.png')} /> */}
            </View>

            <View>
                <View style={styles.welcomecontainer}>
                    <Text style={styles.login}>Register</Text>
                </View>
            </View>

            <View style={styles.inputcontainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email address'
                    onChangeText={(text) => setemail(text)} />
            </View>

            <View style={styles.inputcontainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Passwork'
                    secureTextEntry={password}
                    onChangeText={(text) => setpass(text)}
                />

            </View>

            <View style={styles.inputcontainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Date of Birth'
                    onChangeText={(text) => setDate(text)} />
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ letterSpacing: 2 }}>By signing up, you agree to our
                    <Text style={{ color: 'orange' }}> Terms, Data Policy </Text>
                    and
                    <Text style={{ color: 'orange' }}> Cookies Policy</Text>
                </Text>
            </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onPressDangky} style={styles.button}>
                    <Text style={styles.buttonLabel}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={Cancel} style={styles.buttonC}>
                    <Text style={styles.buttonLabelC}>Cancel</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Test
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        fontStyle: 'normal',
        lineHeight: 10,
        top: 8
    },
    click: {
        color: 'gray',
        fontWeight: '700',
    },

    buttonLabell: {
        color: '#D17842',
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        letterSpacing: 0.5
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 26,
        letterSpacing: 0.5
    },
    buttonLabelC: {
        color: 'blue',
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 26,
        letterSpacing: 0.5
    },
    buttonC: {
        width: '100%',
        height: 57,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
        color: 'blue',
        borderWidth: 1,
        borderColor: 'blue'
    },

    button: {
        width: '100%',
        height: 57,
        backgroundColor: 'blue',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        color: '#fff'
    },
    buttonContainer: {
        width: '100%',
    },

    eyeImage: {
        width: 30,
        height: 18,
        position: 'absolute',
        right: 17,
        top: 15,
    },

    input: {
        backgroundColor: '#DDDDDD',
        width: '100%',
        height: 48,
        color: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#252a32',
        paddingHorizontal: 17,
        paddingVertical: 11,
    },
    inputcontainer: {
        color: '#fff',
        width: '100%',
        marginTop: 16,
    },

    welcomecontainer: {
        marginTop: 10,
    },
    login: {
        color: 'black',
        fontSize: 15,
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 26,
        letterSpacing: 0.5
    },
    welcome: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 26,
        letterSpacing: 0.5
    },
    logo: {
        alignItems: 'center',
    },

    Logoimg: {
        width: 100,
        height: 100,

    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',

        justifyContent: 'center',
        padding: 30,

    }
})