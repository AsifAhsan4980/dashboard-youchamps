import {API, Auth} from "aws-amplify";
import {searchPayments} from "../../graphql/queries";
import {useEffect, useState} from "react";
import PaymentInfo from "./PaymentInfo";
import moment from "moment";
import LoadingAnimation from "../../components/LoadingAnimation";

const PayInfo = () => {

    const [allData, setData] = useState([])
    const [user, setUser] = useState({
        username: undefined
    })

    let getData = async () => {
        const response: any = await API.graphql({
            query: searchPayments,
            authMode: "AMAZON_COGNITO_USER_POOLS",
            variables: {filter: {merchantID: {eq: user.username}, PaymentType: {eq: "Payment"}}}
        })
        return response.data.searchPayments.items
    }

    useEffect(()=> {
        Auth.currentUserInfo().then(r=>setUser(r))
    }, [])

    useEffect(() => {
        if (user.username) {
            getData().then(r => {
                setData(r.map((d : any)=> {
                    console.log('allpayment::',r)
                    return {
                        date : moment(d.tranTime).format('MMMM Do YYYY, h:mm:ss a').toString(),
                        transactionType : d.transactionType,
                        transactionStatus : d.transactionStatus,
                        taTotal : `${d.taTotal} (${d.taCurrency})`,
                        approveTotal : d.approveTotal ? `${d.approveTotal} (${d.approveCurrency})` : 'Not approved',
                        transactionId: d.ipgTransactionId,
                        id:d.id
                    }
                }))
            })

        }


    }, [user.username])


    return (
        <>
            {allData.length===0 ? ( <LoadingAnimation/>) : (<PaymentInfo data={allData}/>)}
        </>
    )
}

export default PayInfo