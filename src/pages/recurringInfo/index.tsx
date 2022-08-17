import {API} from "aws-amplify";
import {searchPayments} from "../../graphql/queries";
import {useEffect, useState} from "react";
import AllRecurring from "./AllRecurring";
import moment from "moment";
import LoadingAnimation from "../../components/LoadingAnimation";

const RecurringInfo = () => {

    const [allData, setData] = useState([])


    let getData = async () => {
        try {
            const response: any = await API.graphql({
                query: searchPayments,
                authMode: "AMAZON_COGNITO_USER_POOLS",
                variables: {filter: {merchantID: {eq: "d8594343-4eef-48e9-abfb-d04634396aa9"}, PaymentType: {eq: "Recurring"}}}
            })
            return response.data.searchPayments.items
        }catch (e){
            console.log(e)
        }

    }

    useEffect(() => {
        getData().then(r => {
            setData(r.map((d : any)=> {
                console.log('allpayment::',r)
                let frequency = JSON.parse(d.frequency)
                console.log('frequency',frequency)
                return {
                    date : moment(d.tranTime).format('MMMM Do YYYY, h:mm:ss a').toString(),
                    startDate : d.startDate,
                    numberOfPayments: d.numberOfPayments,
                    taTotal : `${d.taTotal} (${d.taCurrency})`,
                    orderId: d.orderId,
                    state : d.state,
                    frequency : `Every ${frequency.every} ${frequency.unit.toLowerCase()}`,
                    id:d.id
                }
            }))
        })

    }, [])


    return (
        <>
            {allData.length===0 ? ( <LoadingAnimation/>) : (<AllRecurring data={allData}/>)}
        </>
    )
}

export default RecurringInfo