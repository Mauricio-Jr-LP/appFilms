import React from "react";

import { Container, BannerItem, Title, RateContainer, Rate } from './styles';

import { Ionicons } from '@expo/vector-icons';


function SliderItem( {data, navigatePage } ) {
    return(
        <Container activeOpacity={0.7} onPress = { () => navigatePage(data) } >

            <BannerItem
                source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}}
            >
            </BannerItem>

            <Title numberOfLines={1}>{data.title}</Title>

            <RateContainer>
                <Ionicons name="md-star" size={13} color="#E7A74e"></Ionicons>
                <Rate>{data.vote_average}</Rate>
            </RateContainer>

        </Container>
    )
}

export default SliderItem;