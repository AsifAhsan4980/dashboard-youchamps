import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {getPayment} from "../../graphql/queries";
import {Box, Button, Container, Divider, Grid, Paper, Stack, Typography} from "@mui/material";
import moment from "moment";
import LoadingAnimation from "../../components/LoadingAnimation";
import {useNavigate} from "react-router-dom";
import Refund from "../refund/Refund";

const SinglePayInfo = () => {
    const params = useParams()
    const router = useNavigate()
    const [paymentData, setPaymentData] = useState({
        merchantID: undefined,
        ipgTransactionId: undefined,
        tranTime: undefined,
        transactionStatus: undefined,
        transactionType: undefined,
        transactionOrigin: undefined,
        taTotal: undefined,
        taCurrency: undefined,
        approveTotal: undefined,
        approveCurrency: undefined
    })
    const [flag, setFlag] = useState(false)
    const [show, setShow] = useState(false)
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
            setFlag(true)
        })
    }, [])

    const PaymentDataView = () => {
        return (
            <Paper elevation={3} sx={{p:2}}>
                {show && (<Refund data={paymentData}/>)}
                <Container maxWidth={'sm'}>
                    <Typography sx={{textAlign:'center'}} variant={'h5'}>
                        Detailed Info
                    </Typography>
                    <Divider variant={'middle'}/>
                    <Grid container sx={{textAlign:"center", mt: 2}}>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                Transaction ID
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
                                    paymentData.ipgTransactionId
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
                                Transaction Status
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
                                    paymentData.transactionStatus
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{textAlign:"center", mt: 2}}>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                Transaction Type
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
                                    paymentData.transactionType
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
                                Approved Amount
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant={'body1'}>
                                :
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            {paymentData.approveTotal ? (
                                <Typography color={'green'} variant={'body1'}>
                                    {paymentData.approveTotal } ({paymentData.approveCurrency})
                                </Typography>
                            ) : (
                                <Typography color={'red'}>
                                    Request has nor been approved
                                </Typography>
                            )}

                        </Grid>
                    </Grid>

                    <Divider sx={{m:2}}/>
                    <Grid container justifyContent="flex-end">
                        <Stack sx={{mt: 2, alignItems: "right"}} spacing={2} direction="row">
                            <Button variant="outlined" color="error" disabled={!paymentData.approveTotal} onClick={()=>setShow(true)}>Refund this Payment</Button>
                            <Button variant="outlined" onClick={()=> {router('/payment-info')}}>Back to All Payment</Button>
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

export default SinglePayInfo