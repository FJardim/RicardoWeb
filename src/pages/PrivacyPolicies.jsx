import SystemInfo from "../util/SystemInfo";

const PrivacyPolicies = () => {
    return (
        <div className="p-20">
            <h1 className="text-4xl font-bold text-center mb-10">
                {SystemInfo.name} Privacy Policy.
            </h1>
            <p>
                If you live in the European Region, {SystemInfo.name} Ireland Limited provides the services to you in accordance with these Terms of Service and the Privacy Policy.
            </p>
            <br />
            <h3 className="text-main text-2xl font-bold">
                {SystemInfo.name} legal information
            </h3>
            <p>
                If you live outside of the European Region, {SystemInfo.name} ("{SystemInfo.name}", "our", "we" or "us") provides our Services to you in accordance with these Terms of Service and Privacy Policy.

                <br /><br />
                In our Privacy Policy ("Privacy Policy"), we explain our data practices, including the information we process to provide our Services.

                <br /><br />
                For example, in our Privacy Policy we talk about the information we collect and what it means for you. We also explain the steps we take to protect your privacy, such as designing our Services so that we don't store delivered messages and giving you control over who you communicate with on our Services.
                <br /><br />
                This Privacy Policy applies to all of our Services unless otherwise specified.
                <br /><br />
                Please also see {SystemInfo.name}'s Terms of Service ("Terms"), which describe the terms that govern your use of our Services and how we provide them.
            </p>
            <br />
            <h3 className="text-main text-2xl font-bold">
                Information we collect
            </h3>
            <p>
                {SystemInfo.name} must receive or collect information to operate, provide, improve, understand, customize, support and promote our Services, when you use, install or access our Services.
                <br /><br />
                The type of information we receive and collect depends on how you use our Services. We require certain information to provide our Services and if we do not collect it, we will not be able to provide it. For example, you must provide your email address to create an account in order to use our Services.
                <br /><br />
                We include optional features on our Services that, if you choose them, we will need to collect additional information to provide you with those features. If applicable, we will notify you about the collection of information. If you choose not to provide the information required for a feature, you will not be able to use it. For example, you can't share files with other users if you don't allow us to collect files from your device gallery. You can manage permissions through the settings menu on both Android and iOS devices.
            </p>
            <br />
            <p className="text-xl">Information you provide</p>
            <br />
            <ul>
                <li className="mb-4">
                    <p>
                        <b>Your account information. </b>
                        When you create a {SystemInfo.name} account, you must provide your mobile phone number along with some basic information (including a profile name of your choice). If you do not provide us with this information, you will not be able to create an account to use our Services. You can add other information to your account, such as your profile photo and information about yourself.
                    </p>
                </li>
                <li className="mb-4">
                    <p>
                        <b>Technical support and other types of communication. </b>
                        When you contact us for technical support or otherwise communicate with us, you may provide us with information related to your use of our Services, including copies of your messages, any other information you find helpful, and your contact information. contact (such as an email address). For example, you can send us an email with information related to the performance of the application or other problems you are having.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Cookies. </b>
                        We use cookies to operate and provide our Services, as well as to provide you with our Internet-based Services, improve your experiences, understand how our Services are used, and customize our Services. For example, we use cookies to provide our Computer and Internet Services and other Internet-based services. We may also use cookies to understand the most popular articles in our Help Center in order to show you relevant content related to our Services. Additionally, we may use cookies to remember choices you have made, such as language preferences, to provide you with a more secure experience, and to otherwise customize our Services to your interests.
                    </p>
                </li>
            </ul>
            <br />
            <h3 className="text-main text-2xl font-bold">
                How we use information
            </h3>
            <p>
                We use the information we have (subject to the choices you make and applicable law) to operate, provide, improve, understand, customize, support, and promote our Services. This is how we do it:
            </p>
            <br />
            <ul>
                <li className="mb-4">
                    <p>
                        <b>Our services. </b>
                        We use the information we have to operate and provide our Services, including providing you with technical support, completing purchases or transactions, improving, fixing, and customizing our Services. We also use the information we have to understand how our Services are used, evaluate and improve them, conduct research, develop and test new services and features; In addition, we carry out activities aimed at solving problems. We also use your information to respond to you when you contact us.
                    </p>
                </li>
                <li className="mb-4">
                    <p>
                        <b>Protection, security and integrity. </b> Protection, security and integrity are the integral part of our Services. We use the information we have to verify accounts and activities, combat harmful behavior, protect users from bad experiences and spam, and promote safety, security, and integrity both inside and outside of our Services, such as by by investigating suspicious activity or violations of our Terms and Policies, and to ensure that our Services are used lawfully.
                    </p>
                </li>
                <li className="mb-4">
                    <p>
                        <b>We do not publish third-party banner ads. </b> We do not yet allow advertising by third parties on our Services. We do not intend to do so, but if it ever occurs, we will update this Privacy Policy.
                    </p>
                </li>
            </ul>
            <br />
            <h3 className="text-main text-2xl font-bold">
                Assignment, change of control and transfer
            </h3>
            <p>
                In the event that we are involved in a merger, acquisition, restructuring, bankruptcy or sale of all or a portion of our assets, we will share your information related to the transaction with the successor entities or new owners, under protection legislation applicable data.
            </p>
            <br />
            <h3 className="text-main text-2xl font-bold">
                Updates to our Policy
            </h3>
            <p>
                We may modify or update our Privacy Policy. We will notify you of changes to this Privacy Policy, as appropriate, and will update the “Last Modified” date at the top of this Privacy Policy. Please review our Privacy Policy from time to time.
            </p>
        </div>
    )
}

export default PrivacyPolicies;