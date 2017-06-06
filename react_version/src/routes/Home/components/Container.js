import React from 'react'
import Logo from '../components/images/logo.png'
import TopBannerImage from '../components/images/top-banner-app.png'
import BtnApple from '../components/images/btn-apple.png'
import BtnGoole from '../components/images/btn-google.png'
import Icon1 from '../components/images/icon1.png'
import Icon2 from '../components/images/icon2.png'
import Icon3 from '../components/images/icon3.png'
import Icon4 from '../components/images/icon4.png'
import Icon5 from '../components/images/icon5.png'
import Icon6 from '../components/images/icon6.png'
import SlideImage from '../components/images/banner-app.png'
import IconLocation from '../components/images/icon-location.png'
import IconMail from '../components/images/icon-mail.png'
import IconPhone from '../components/images/icon-phone.png'
import Menu from '../modules/Menu'
import TopBanner from '../modules/TopBanner'
import Feature from '../modules/Feature'
import FeatureItem from '../modules/FeatureItem'
import Slide from '../modules/Slide'
import Download from '../modules/Download'
import Contact from '../modules/Contact'

export default class Container extends React.Component {
	constructor(props, context) {
		super(props, context);

		[
			'onItemClick',
			'onReturnTopClick'
		].forEach((method) => this[method] = this[method].bind(this));
	}

	componentDidMount() {
		// ===== Scroll to Top ==== 
	    $(window).scroll(function() {
	        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	            $('#return-to-top').fadeIn(200);    // Fade in the arrow
	        } else {
	            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	        }
	    });
	}

	onItemClick(element) {
		$('html, body').animate({
            scrollTop: $(element).offset().top
        }, 2000);

        return false;
	}

	onReturnTopClick() {
		$('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
	}

	render() {
		return (
			<div>
				{/* HEADER */}
				<Menu logo={Logo} 
					items={[ 
						{
							id: 1,
							href: '#home',
							text: 'Trang chủ'
						},
						{
							id: 2,
							href: '#feature',
							text: 'Tính năng nổi bật'
						},
						{
							id: 3,
							href: '#review',
							text: 'Đánh giá'
						},
						{
							id: 4,
							href: '#download',
							text: 'Download'
						},
						{
							id: 5,
							href: '#contact',
							text: 'Liên hệ'
						},
					]}
					onItemClick={this.onItemClick}
				/>

				{/* TOP BANNER */}
				<TopBanner 
					id={'home'} 
					image={TopBannerImage}
					caption={'Lorem Ipsum is simply dummy text of the printing.'}
					text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
					actions={[
						{
							href: '#',
							image: BtnApple
						},
						{
							href: '#',
							image: BtnGoole
						},
					]}
				/>

				{/* FEATURE */}
				<Feature 
					id={'feature'}
					caption={'Tính năng nổi bật'} 
					captionHelper={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
				>
					<div className="row">
						<FeatureItem 
							image={Icon1}
							title={'Chức năng cho thuê xe du lịch/tự lái'}
							description={'Chưa bao giờ dễ dàng đến thế, tất cả mẫu xe bạn mong muốn OTO4U đều có thể cung cấp cho bạn. Chỉ việc lựa chọn xe bạn thích, sau đó gọi ngay đến chủ xe để đặt xe.'}
						/>

						<FeatureItem 
							image={Icon2}
							title={'Mua bán xe'}
							description={'Bạn muốn mua xe/ bán xe, hãy để OTO4U giúp bạn nhé! Đến với OTO4U bạn sẽ rất dễ dàng tra cứu giá xe, ước lượng chi phí, lựa chọn xe phù hợp với gia đình và thu nhập của bạn.'}
						/>

						<FeatureItem 
							image={Icon3}
							title={'Tìm kiếm bãi đỗ xe/garage'}
							description={'OTO4U cung cấp chức năng cho cộng đồng tài xế chia sẽ bãi đỗ xe, garage. Một ngày bạn sẽ được check-in vị trí 10 lần, và vị trí đó nếu 5 lần bị report sẽ tự động xóa khỏi bản đồ.'}
						/>

						<FeatureItem 
							image={Icon4}
							title={'Đặt xe'}
							description={'Chức năng này sẽ giúp bạn ngay lập tức gửi tin đặt xe, thuê xe, hay bất kỳ thông tin nào đến cộng đồng tài xế, những người có đăng ký dịch vụ nhận tin đặt xe của OTO4U.'}
						/>

						<FeatureItem 
							image={Icon5}
							title={'Tra cứu giá xe'}
							description={'Nơi cập nhật nhanh nhất giá xe mới, xe đã qua sử dụng giúp bạn tra cứu hay định giá để có được quyết định mua/ bán phù hợp với khả năng tài chính của mình.'}
						/>

						<FeatureItem 
							image={Icon6}
							title={'Tin tức'}
							description={'Rất nhiều thông tin hay và bổ ích về xe ô tô, bài đánh giá xe, thông tin xe mới sẽ được cập nhật thường xuyên. Bạn sẽ có thêm thông tin để quyết định lựa chọn xe phù hợp cho mình.'}
						/>
					</div>
				</Feature>

				{/* SLIDER */}
				<Slide id={'slider'}>
					<div><img src={SlideImage} className="img-responsive" /></div>
					<div><img src={SlideImage} className="img-responsive" /></div>
					<div><img src={SlideImage} className="img-responsive" /></div>
					<div><img src={SlideImage} className="img-responsive" /></div>
					<div><img src={SlideImage} className="img-responsive" /></div>
				</Slide>

				{/* DOWNLOAD */}
				<Download 
					id={'download'}
					caption={'Download và trãi nghiệm'} 
					captionHelper={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} 
					actions={[
						{
							href: '#',
							iconClass: 'fa fa-apple',
							text: 'APPLE STORE'
						},
						{
							href: '#',
							iconClass: 'fa fa-google',
							text: 'GOOGLE PLAY'
						},
					]}
				/>

				{/* CONTACT */}
				<Contact 
					id={'contact'} 
					items={[
						{
							icon: IconLocation,
							description: `335 Trần Xuân Soạn, Phường Tân Kiểng <br/>
							Quận 7, Hồ Chí Minh`
						},
						{
							icon: IconMail,
							description: `Office : 08 546 567 <br/>
							Phone : 0908 235 566`
						},
						{
							icon: IconPhone,
							description: `support@oto4u.vn <br/>
							admin@oto4u.vn`
						},
					]}
					socials={[
						{
							href: '#',
							iconClass: 'fa fa-facebook'
						},
						{
							href: '#',
							iconClass: 'fa fa-instagram'
						},
						{
							href: '#',
							iconClass: 'fa fa-pinterest-p'
						},
						{
							href: '#',
							iconClass: 'fa fa-youtube-play'
						}
					]}
					copyright={'OTO4U.VN - App landing pages © 2017'}
				/>

				<a href="javascript:" id="return-to-top" onClick={this.onReturnTopClick}>
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</a>
			</div>
		)	
	}
}