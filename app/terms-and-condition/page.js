import React from 'react'

const page = () => {
    return (
        <div className="px-[10px] py-[20px] bg-white">
            <div className="max-w-[1024px] mx-[auto] text-black">
                <h1 class="text-3xl font-bold mb-4">Terms and Conditions</h1>

                <div class="prose prose-indigo max-w-none">
                    <p>
                        Welcome to [Your Company Name]! These Terms and
                        Conditions govern your use of our website and services.
                        By accessing or using our website and services, you
                        agree to comply with these Terms and Conditions. Please
                        read them carefully before using our platform.
                    </p>

                    <ol class="list-decimal pl-6 mt-4">
                        <li>
                            <strong>Acceptance of Terms:</strong> By accessing
                            our website or using our services, you acknowledge
                            that you have read, understood, and agreed to be
                            bound by these Terms and Conditions. If you do not
                            agree to these terms, please refrain from using our
                            platform.
                        </li>
                        <li>
                            <strong>User Eligibility:</strong> You must be at
                            least 18 years old to use our website and services.
                            By using our platform, you represent and warrant
                            that you are of legal age to form a binding contract
                            with us.
                        </li>
                        <li>
                            <strong>Privacy Policy:</strong> Your privacy is
                            important to us. Please review our{' '}
                            <a href="#" class="text-indigo-600 hover:underline">
                                Privacy Policy
                            </a>{' '}
                            to understand how we collect, use, and protect your
                            personal information.
                        </li>
                        <li>
                            <strong>Account Registration:</strong> To access
                            certain features of our platform, you may need to
                            create an account. You are responsible for providing
                            accurate and up-to-date information during the
                            registration process. Keep your login credentials
                            secure and do not share them with others. You are
                            solely responsible for any activity that occurs
                            under your account.
                        </li>
                        <li>
                            <strong>User Conduct:</strong> You agree not to use
                            our platform for any illegal or unauthorized
                            purpose. You must comply with all applicable laws
                            and regulations while using our services.
                            Furthermore, you agree not to engage in any of the
                            following activities:
                            <ul class="list-disc pl-6 mt-2">
                                <li>
                                    Violating any intellectual property rights
                                </li>
                                <li>Uploading malicious software or content</li>
                                <li>
                                    Transmitting spam or unsolicited messages
                                </li>
                                <li>
                                    Harassing, threatening, or harming others
                                </li>
                                <li>Impersonating someone else</li>
                                <li>
                                    Engaging in any fraudulent or deceptive
                                    activities
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Intellectual Property:</strong> All content
                            and materials on our website, including but not
                            limited to text, graphics, logos, images, and
                            software, are the property of [Your Company Name]
                            and are protected by copyright and other
                            intellectual property laws. You may not use,
                            reproduce, distribute, or modify any of our content
                            without our explicit written consent.
                        </li>
                        <li>
                            <strong>Third-Party Links:</strong> Our platform may
                            contain links to third-party websites or services
                            that are not owned or controlled by [Your Company
                            Name]. We are not responsible for the content,
                            privacy practices, or terms and conditions of these
                            third-party sites. We encourage you to review their
                            policies before engaging with them.
                        </li>
                        <li>
                            <strong>Disclaimer of Warranties:</strong> Our
                            platform and services are provided on an
                            `&quot;`as-is`&quot;` basis without any warranties
                            or guarantees. We do not warrant that our website
                            will be error-free, secure, or uninterrupted. We
                            disclaim all warranties, whether express or implied,
                            including but not limited to warranties of
                            merchantability, fitness for a particular purpose,
                            and non-infringement.
                        </li>
                        <li>
                            <strong>Limitation of Liability:</strong> In no
                            event shall [Your Company Name] be liable for any
                            direct, indirect, incidental, special, or
                            consequential damages arising out of or in any way
                            connected with your use of our platform or services.
                            This includes but is not limited to damages for loss
                            of profits, data, goodwill, or other intangible
                            losses.
                        </li>
                        <li>
                            <strong>Changes to Terms and Conditions:</strong> We
                            reserve the right to modify or update these Terms
                            and Conditions at any time without prior notice. Any
                            changes will be effective upon posting on our
                            website. Your continued use of our platform after
                            the changes are made constitutes your acceptance of
                            the revised Terms and Conditions.
                        </li>
                        <li>
                            <strong>Governing Law and Jurisdiction:</strong>{' '}
                            These Terms and Conditions shall be governed by and
                            construed in accordance with the laws of [Your
                            Country/State]. Any disputes arising from these
                            terms shall be subject to the exclusive jurisdiction
                            of the courts in [Your Country/State].
                        </li>
                    </ol>

                    <p>
                        If you have any questions or concerns regarding these
                        Terms and Conditions, please contact us at{' '}
                        <a href="#" class="text-indigo-600 hover:underline">
                            [Your Contact Email]
                        </a>
                        .
                    </p>

                    <p>Thank you for using [Your Company Name]!</p>
                </div>
            </div>
        </div>
    )
}

export default page
