import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {getPayment} from "../../graphql/queries";
import {Button, Container, Divider, Grid, Paper, Stack, Typography} from "@mui/material";
import moment from "moment";
import LoadingAnimation from "../../components/LoadingAnimation";
import {useNavigate} from "react-router-dom";
import Refund from "../refund/Refund";

const SingleRecurring = () => {
    const params = useParams()
    const router = useNavigate()
    const [show, setShow] = useState(false)
    const [paymentData, setPaymentData] = useState({
        merchantID: undefined,
        tranTime: undefined,
        transactionOrigin: undefined,
        taTotal: undefined,
        taCurrency: undefined,
        approveTotal: undefined,
        approveCurrency: undefined,
        orderId: undefined,
        startDate: undefined, state: undefined

    })
    
    const [frequency, setFrequency] = useState({
        every: undefined,
        unit: undefined
    })

    const [flag, setFlag] = useState(false)
    console.log(params)
    const getPaymentInfo = async () => {
        const response: any = await API.graphql({
            query: getPayment,
            authMode: "AMAZON_COGNITO_USER_POOLS",
            variables: {id: params.id}
        })
        return response.data.getPayment
    }
    useEffect(() => {
        getPaymentInfo().then(r => {
            console.log(r)
            setPaymentData(r)
            setFrequency(JSON.parse(r.frequency))
            setFlag(true)
        })
    }, [])

    const PaymentDataView = () => {
        return (
            <Paper elevation={3} sx={{p:2}}>
                {show && (<Refund data={paymentData}/>)}
                <Container maxWidth={'lg'}>
                    <Typography sx={{textAlign:'center'}} variant={'h5'}>
                        Detailed Info
                    </Typography>
                    <Divider variant={'middle'}/>
                    <Grid container sx={{textAlign:"center", mt: 2}}>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                Order ID
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                :
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                {
                                    paymentData.orderId
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{textAlign:"center", mt: 2}}>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                Transaction Date
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                :
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                {
                                    moment(paymentData.tranTime).format('MMMM Do YYYY, h:mm:ss a').toString()
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{textAlign:"center", mt: 2}}>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                Start Date
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                :
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                {
                                    paymentData.startDate
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{textAlign:"center", mt: 2}}>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                Frequency
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                :
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                {
                                    `Every ${frequency.every} ${frequency.unit}`
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{textAlign:"center", mt: 2}}>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                Transaction Origin
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                :
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                {
                                    paymentData.transactionOrigin
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{textAlign:"center", mt: 2}}>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                Transaction Amount & Currency
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                :
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                {paymentData.taTotal } ({paymentData.taCurrency})
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{textAlign:"center", mt: 2}}>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                Transaction State
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                :
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography>
                                {
                                    paymentData.state
                                }
                            </Typography>

                        </Grid>
                    </Grid>
                    <Divider sx={{m:2}}/>
                    <Grid container justifyContent="flex-end">
                        <Stack sx={{mt: 2, alignItems: "right"}} spacing={2} direction="row">
                            <Button variant="outlined" color="error" onClick={()=>setShow(true)}>Refund this Payment</Button>
                            <Button variant="outlined" onClick={()=> {router('/recurring-payment-info')}}>Back to All Payment Schedule</Button>
                        </Stack>
                    </Grid>
                </Container>





            </Paper>
        )
    }
    const Loading = () => {
        return (
            <>
                <LoadingAnimation/>
            </>
        )
    }

    return (
        <>
            {flag ? (<PaymentDataView/>) : (<Loading/>)}
        </>
    )
}

export default SingleRecurring