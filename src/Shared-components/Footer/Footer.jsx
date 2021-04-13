import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const FooterMainDiv = styled.div`
    /* background: red; */
    height: 42vh;

    > div:nth-child(1) {
        height: 85%;
        display: flex;
        padding-top: 2%;
    }

    > div:nth-child(2) {
        height: 15%;
        padding-top: 15px;
        color: #fff;
        font-size: 13px;
        background: black;
        justify-content: center;

        > div * {
            margin: 0 1%;
        }
    }

    @media all and ( max-width: 500px ) {

        > div:nth-child(1) {
            height: 85%;
            display: block;
            padding-top: 2%;
        }

        > div:nth-child(2) {
            height: 15%;
            margin-top: 46em;
            padding-top: 15px;
            color: #fff;
            font-size: 10px;
            background: black;
            justify-content: center;

            > div * {
                margin: 0 1%;
            }
        }
    }
`

const DonateDiv = styled.div`
    padding: 20px;
    margin: 0 4%;
    background: white;

    > div:nth-child(1) {

        div {
            border-bottom: 1px solid black;
            width: 9px;
        }
    }

    > div:nth-child(2) {
        width: 100%;
        text-align: center;
        * {
            margin: 6% 0;

            > div {
                display: flex;
                flex-direction: row;

                > div:nth-child(1) {
                    width: 1.5em;
                    height: 1.5em;
                    margin: 1%;
                    padding: 10px;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }

                > div:nth-child(2) {
                    margin-left: 1em;
                    color: #5d5d5d;
                    font-family: AvenirLTPro-Medium;
                }
            }
        }
    }

    @media all and ( max-width: 500px ) {
        padding: 20px;
        margin: 0 4%;
        background: white;

        > div:nth-child(1) {

            div {
                border-bottom: 1px solid black;
                width: 9px;
                margin: 0 36.5%;
            }
        }

        > div:nth-child(2) {
            width: 100%;
            text-align: center;
            * {
                margin: 0% 0 0% 35.5%;

                > div {
                    display: flex;
                    flex-direction: row;

                    > div:nth-child(1) {
                        width: 1.5em;
                        height: 1.5em;
                        margin: 1%;
                        padding: 10px;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }

                    > div:nth-child(2) {
                        margin-left: 1em;
                        color: #5d5d5d;
                        font-family: AvenirLTPro-Medium;
                    }
                }
            }
        }
    }

`

const FundraiseDiv = styled.div`
    flex: 1;
    padding: 20px;

    > div:nth-child(2) {
        font-size: 14px;
        margin: 10% 0;
        color: #9c3353;

        * {
            margin: 1% 2%;
        }
    }

    > div:nth-child(3) {
        margin: 1% 19%;
        padding: 18px;
        background: #f7f7f7;
        border-radius: 3px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        > div:nth-child(1) {
            flex: 0.5;
            font-size: 12px;
            font-weight: 500;
        }

        > div:nth-child(2) {
            flex: 1;
            display: flex;
            flex-direction: row;

            * {
                margin: 0 2%;
            }

            > * div {
                height: 1em;
                width: 1em;
                padding: 10px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
    }
`

const MilInfo = styled.div`
    flex: 1.8;
    background: #f7f7f7;
    padding: 20px;
    margin: 0 0 0.8% 4%;
    border-bottom-left-radius: 40px;
    border-top-left-radius: 3px;
    display: flex;
    flex-direction: row;

    > div:nth-child(1) {
        margin: 0 18% 0 5%;
        padding: 0 20px;

        > div:nth-child(1) {
            text-align: left;
            > div {
                border-bottom: 1px solid black;
                width: 9px;
            }
        }

        > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            text-align: left;
            color: #9c3353;
            font-size: 14px;

            * {
                margin: 7% 0;
            }
        }
    }

    > div:nth-child(2) {
        flex: 1;

        > div:nth-child(1) {

            > div:nth-child(1) {
                text-align: left;
                > div {
                    border-bottom: 1px solid black;
                    width: 9px;
                }
            }

            > div:nth-child(2) {
                text-align: left;
                margin-top: 2%;
                color: #6c6c6c;
                font-size: 14px;
            }
        }

        > div:nth-child(2) {
            margin-top: 5%;
            font-size: 12px;
            font-weight: 500;

            > div:nth-child(1) {
                text-align: left;
                > div {
                    border-bottom: 1px solid black;
                    width: 9px;
                }
            }

            > div:nth-child(2) {
                display: flex;
                flex-direction: row;

                div {
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }

                > div:nth-child(1) {
                    width: 4em;
                    height: 1.5em;    
                    margin: 3% 0;
                }
                > div:nth-child(2) {
                    width: 3em;
                    height: 1.5em;    
                    margin: 3% 1%;
                }
                > div:nth-child(3) {
                    width: 3.8em;
                    padding: 1.4em;
                    height: 1.5em;    
                    margin: 0.8% 1%;
                }
                > div:nth-child(4) {
                    width: 4em;
                    height: 3em;
                    border-radius: 2px;
                    margin: 1% 1%;
                }
            }
        }
    }
    
`

export const Footer = () => {
    return (
        <FooterMainDiv>
            <div>
                <DonateDiv>
                    <div>
                        <span>Donte towards</span>
                        <div></div>
                    </div>
                    <div>
                        <Link>
                            <div>
                                <div style={{backgroundImage: `url(${"https://www.flaticon.com/svg/vstatic/svg/809/809957.svg?token=exp=1618298933~hmac=4f4f9e54182f9809b9f75bfaa2adac59"})`}}></div>
                                <div>Medical</div>
                            </div>
                        </Link>
                        <Link>
                            <div>
                                <div style={{backgroundImage: `url(${"https://www.flaticon.com/svg/vstatic/svg/566/566985.svg?token=exp=1618299597~hmac=095a0e1c9ab91b605b11596200f8fdb8"})`}}></div>
                                <div>Education</div>
                            </div>
                        </Link>
                        <Link>
                            <div>
                                <div style={{backgroundImage: `url(${"https://www.flaticon.com/svg/vstatic/svg/628/628533.svg?token=exp=1618299664~hmac=43d110816ffe61bae714c0f412222ac6"})`}}></div>
                                <div>Memorial</div>
                            </div>
                        </Link>
                    </div>
                </DonateDiv>
                <FundraiseDiv>
                    <div>
                        <button>START</button>
                    </div>
                    <div>
                        <Link>Princing</Link>
                        <Link>Milaap Reviews</Link>
                        <Link>FAQs & tips</Link>
                    </div>
                    <div>
                        <div>Find us on</div>
                        <div>
                            <Link>    
                                <div style={{backgroundImage: `url(${"https://www.flaticon.com/svg/vstatic/svg/49/49354.svg?token=exp=1618301484~hmac=ec68c05776356b344d23e7647a11d13f"})`}}></div>
                            </Link>
                            <Link>
                                <div style={{backgroundImage: `url(${"https://www.flaticon.com/svg/vstatic/svg/1384/1384017.svg?token=exp=1618301570~hmac=915e3fded0f9488cdf7a1f678aca753e"})`}}></div>
                            </Link>
                            <Link>
                                <div style={{backgroundImage: `url(${"https://www.flaticon.com/svg/vstatic/svg/1384/1384014.svg?token=exp=1618301595~hmac=1929596a803c5837b084caeb1b4bc072"})`}}></div>
                            </Link>
                            <Link>
                                <div style={{backgroundImage: `url(${"https://www.flaticon.com/svg/vstatic/svg/1384/1384015.svg?token=exp=1618301655~hmac=a70626646ddd71adbbb7d6fc3c4fe2af"})`}}></div>
                            </Link>
                            <Link>
                                <div style={{backgroundImage: `url(${"https://www.flaticon.com/svg/vstatic/svg/49/49399.svg?token=exp=1618301706~hmac=2d756a3f1207e238e24520c081020f3e"})`}}></div>
                            </Link>
                        </div>
                    </div>
                </FundraiseDiv>
                <MilInfo>
                    <div>
                        <div>
                            <span>Milaap</span>
                            <div></div>
                        </div>
                        <div>
                            <Link>About us</Link>
                            <Link>Press & Media</Link>
                            <Link>Team</Link>
                            <Link>Careers</Link>
                            <Link>Contact</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>                                
                                <span>Indian office address</span>
                                <div></div>
                            </div>
                            <div>
                                <p>Milaap Social Ventures India Pvt. Ltd.</p>
                                <p>ClayWorks Create - building,11th KM Create</p>
                                <p>Campus,Arakere Bannerghatta Rd,</p>
                                <p>Bangalore, Karnataka, India 560076</p>
                            </div>
                        </div>
                        <div>
                            <div>                                
                                <span>Supported by</span>
                                <div></div>
                            </div>
                            <div>
                                <div style={{backgroundImage: `url(${"https://assets.milaap.org/assets/footer/visa-2f0810494a6cf6b3c56bb2c4f3f8f8eb56aa9a7fef7ce3e09221da38b99ae22e.png"})`}}></div>
                                <div style={{backgroundImage: `url(${"https://assets.milaap.org/assets/footer/master_card-5dd6fa0fc948f5eb5d4a826caecf0871781948403df78bb4f95c5ff6020b6130.png"})`}}></div>
                                <div style={{backgroundImage: `url(${"https://assets.milaap.org/assets/footer/paytm-e4064c63e5406550c7b8c13346a5bfef0b826ca5b1289e2407d4dcb4622d67e3.png"})`}}></div>
                                <div style={{backgroundImage: `url(${"https://e7.pngegg.com/pngimages/711/297/png-clipart-logo-american-express-payment-computer-icons-brand-american-express-blue-text-thumbnail.png"})`}}></div>
                            </div>

                        </div>
                    </div>
                </MilInfo>
            </div>
            <div>
                <div>
                    <Link>Security & Privacy</Link>
                    <Link>Condition of use</Link>
                    <span>
                        &#169; 2010 - 2021 milaap.org. All rithts reserved.
                    </span>
                </div>
            </div>
        </FooterMainDiv>
    )
}