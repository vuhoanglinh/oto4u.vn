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
import SlideImage from '../components/images/banner-app.png';
import Menu from '../modules/Menu'
import TopBanner from '../modules/TopBanner'
import Feature from '../modules/Feature'
import FeatureItem from '../modules/FeatureItem'
import Slide from '../modules/Slide'

export default class Container extends React.Component {
	constructor(props, context) {
		super(props, context);

		[
			'onItemClick'
		].forEach((method) => this[method] = this[method].bind(this));
	}

	onItemClick(element) {
		$('html, body').animate({
            scrollTop: $(element).offset().top
        }, 2000);

        return false;
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
			</div>
		)	
	}
}