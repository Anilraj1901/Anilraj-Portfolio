// Contact.js
export default function Contact() {
	return (
		<section className="contact" id="contact">
			<div className="contact-text">
				<h2>Contact Me</h2>
				<h4>Let's Work Together</h4>
				<p>I will Help you in your next Project, Contact me through details given below .</p>
				<div className="contact-list">
					<li><a href="#">Local Address</a></li>
					<li><a href="#">anilraj190100@gmail.com</a></li>
					<li><a href="#">+91 8610250281</a></li>
					<a href="mailto: anilraj190100@gmail.com">
						<button className="btn">
							Let's Chat
						</button>
					</a>
				</div>
				<div className="contact-icons">
					<a href="https://www.linkedin.com/in/anil-raj-mi-534965217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className='bx bxl-linkedin' ></i></a>
					<a href="https://www.instagram.com/_______.anil.________/" target="_blank"><i className='bx bxl-instagram' ></i></a>
					<a href="https://github.com/Anilraj1901" target="_blank"><i className='bx bxl-github' ></i></a>
					<a href="https://www.facebook.com/share/1CN8c1WCg4/" target="_blank"><i className='bx bxl-facebook' ></i></a>
					<a title="+91 8610250281"><i className='bx bxl-whatsapp' ></i></a>

				</div>
			</div>
		</section>
	);
}