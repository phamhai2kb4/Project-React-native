import React, {useState, useEffect} from 'react'
import { 
    Text, 
    View, 
    Image, 
    ImageBackground,
    TouchableOpacity, 
} from 'react-native'
import { images, icons, fontsizes } from '../contants'
import { UIButton } from '../components'
import Icon from 'react-native-vector-icons/FontAwesome';

const WelcomScreens = (props) => {
    const [accountTypes, setAccountTypes] = useState([
        {
            name : 'Influencer',
            isSelected : true,
        },
        {
            name : 'Business',
            isSelected : false,
        },
        {
            name : 'Individual',
            isSelected : false,
        }
    ])
    return <View style={{
        flex: 100
    }}>
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{
                flex: 100
            }}>
            <View style={{
                height: 50,
                flex: 20,

            }}>
                <View style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Image source={icons.fire}
                        style={{
                            marginStart: 10,
                            marginEnd: 5,
                            width: 30,
                            height: 30
                        }}
                    />
                    <Text style={{
                        color: 'white'
                    }}>YOURCOMPANY.CO</Text>
                    <Text style={{ flex: 1 }} />
                    <Icon name={'question-circle'}
                        size={20}
                        color={'white'}
                        style ={{
                            marginEnd : 10
                        }}
                    />
                    {/* <Image source={icons.question}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: 'white',
                            marginEnd: 10
                        }}
                    /> */}
                </View>
            </View>

            <View style={{
                flex: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <Text style={{ marginBottom: 7, color: 'white', fontSize: fontsizes.h6 }}>Welcom to</Text>
                <Text style={{ marginBottom: 7, color: 'white', fontWeight: 'bold', fontSize : fontsizes.h5 }}>YOURCOMPANY.CO</Text>
                <Text style={{ marginBottom: 7, color: 'white', fontSize: fontsizes.h6 }}>Please select your account type</Text>

            </View>
            <View style={{
                flex: 40,

            }}>
                {accountTypes.map(accountType => <UIButton
                    onPress={() => {
                        setAccountTypes(accountTypes.map(eachAccountType => {
                           return {
                            ...eachAccountType,
                            isSelected: eachAccountType.name == accountType.name
                        }
                    }));
                    
                }}
                title={accountType.name}
                isSelected={accountType.isSelected} />)
                }

            </View>
            <View style={{
                flex: 20,
            }}>
                <UIButton title={'Login'.toUpperCase()}></UIButton>
                <Text style={{
                    color: 'white',
                   
                    fontSize: fontsizes.h6,
                    alignSelf: 'center'
                }}>
                    Want to rigister new Account?
                </Text>
                <TouchableOpacity style={{ padding: 5 }}
                    onPress={()=>{
                        alert('to register')
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: fontsizes.h6,
                        alignSelf: 'center',
                        textDecorationLine: "underline"

                    }}>
                        Register?
                    </Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>


    </View>

}
//component = function
/*function main(props){
    return <Text>this is main screens</Text>
}
//create a variable which reference to a function 
    const WelcomScreens = (props) => {
        const {x,y} = props
        const {person} = props
        const {name, age, email} = person
        const {products} = props
        debugger
        return <View style = {{

        }} >
                <Text>value of x = {props.x}, value of y = {props.y}</Text>
                <Text>Name = {name}, age = {age}, email = {email} </Text>
            
                {products.map(eachProducts =>
                    <Text>{eachProducts.proname}, {eachProducts.year}</Text> )}
                <Text>sum 2 and 3 = {sum2Number(2,3)}</Text>
                <Text>10 - 8 = {(substract2Number(10, 8))}</Text>
                <Text>Pi = {PI} </Text>
            </View>
    }*/
export default WelcomScreens