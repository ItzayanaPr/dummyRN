import { Swiper, SwiperSlide } from 'swiper/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonProgressBar, IonRow } from '@ionic/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination'
import './SliderCard.css';

interface ContainerProps { }

const SliderCard: React.FC<ContainerProps> = () => {
	return (
		<Swiper
			spaceBetween={25}
			slidesPerView={1}
			pagination= {{bulletActiveClass: 'swiper-pagination-bullet-active'}}
			modules={[Pagination]}
		>
			<SwiperSlide>
				<IonCard className="card">
					<IonCardHeader>
						<IonCardTitle></IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<p className="label">Utilizado</p>
						<p><span className="super">$</span>2,500<span className="super">.00</span></p>
						<div id="balanceContainer">
							<p className="label">Limite $10,000.00</p>
							<IonProgressBar value={0.5} className="progressBar"></IonProgressBar>
							<p className="label">Disponible: $7,500.00</p>
						</div>
					</IonCardContent>
				</IonCard>
			</SwiperSlide>
			<SwiperSlide>
				<IonCard className="card cardBack">
					<IonCardContent>
						<div className="cardBand"></div>
						<div id="cardData">
							<p id="cardNumber">**** **** **** 1234</p>
							<IonGrid className="cardValidity">
								<IonRow>
									<IonCol size="6">
										<p className="color-blue">Valido hasta</p>
										<p>**/**</p>
									</IonCol>
									<IonCol size="6">
										<p className="color-blue">CVC</p>
										<p>***</p>
									</IonCol>
								</IonRow>
							</IonGrid>
						</div>
					</IonCardContent>
				</IonCard>
			</SwiperSlide>
		</Swiper>
	);
};

export default SliderCard;