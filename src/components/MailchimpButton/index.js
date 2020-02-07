import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const MAILCHIMP_LIST_URL = '//e-conomy.us4.list-manage.com/subscribe/post?u=514179fa72a21190e8d35215&id=be6de28b15'

const CustomForm = ({ subscribe, status, message }) => (
    <div>
        {/* <MyForm onSubmitted={formData => subscribe(formData)} /> */}
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
    </div>
)

const MailchimpButton = () => <div>
    <MailchimpSubscribe url={MAILCHIMP_LIST_URL} render={CustomForm} />
</div>

export default MailchimpButton