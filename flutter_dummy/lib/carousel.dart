import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

import 'front_card.dart';
import 'back_card.dart';

final cardList = [const FrontCard(), const BackCard()];

final List<Widget> cardSliders = cardList
  .map((item) => Container(
    margin: const EdgeInsets.all(5.0),
    child: ClipRRect(
      borderRadius: const BorderRadius.all(Radius.circular(8.0)),
      child: Stack(
        children: <Widget>[
          Container(
            width: 1000.0,
            decoration: const BoxDecoration(
              color: Color.fromRGBO(11, 30, 62, 1.0),
            ),
            child: item
          ),
          Positioned(
            bottom: 0.0,
            left: 0.0,
            right: 0.0,
            child: Container(
              padding: const EdgeInsets.symmetric(
                vertical: 10.0, horizontal: 20.0
              ),
            ),
          ),
        ],
      )
    ),
  ))
  .toList();

class CardCarousel extends StatefulWidget {
  const CardCarousel({Key? key}) : super(key: key);

  @override
  _CardCarouselState createState() =>
      _CardCarouselState();
}

class _CardCarouselState extends State<CardCarousel> {
  int _current = 0;
  final CarouselController _controller = CarouselController();

  void _showModalBottomSheet(BuildContext context) {
    showModalBottomSheet<void>(
      context: context,
      builder: (context) {
        return _BottomSheetContent();
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Flutter Demo')),
      body: Column(children: [
        CarouselSlider(
          items: cardSliders,
          carouselController: _controller,
          options: CarouselOptions(
            height: 211,
            autoPlay: false,
            aspectRatio: 2.0,
            viewportFraction: 0.9,
            enableInfiniteScroll: false,
            onPageChanged: (index, reason) {
              setState(() {
                _current = index;
              });
            }),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: cardList.asMap().entries.map((entry) {
            return GestureDetector(
              onTap: () => _controller.animateToPage(entry.key),
              child: Container(
                width: 12.0,
                height: 12.0,
                margin: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 4.0),
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: (Theme.of(context).brightness == Brightness.dark
                    ? Colors.white
                    : Colors.black
                  ).withOpacity(_current == entry.key ? 0.9 : 0.4)),
              ),
            );
          }).toList(),
        ),
        ButtonBar(
          alignment: MainAxisAlignment.center,
          buttonPadding: const EdgeInsets.all(16.0),
          children: [
            ElevatedButton(
              onPressed: ()=> {
                _showModalBottomSheet(context)
              }, 
              child: const Icon(
                Icons.circle_notifications,
                color: Colors.white,
                size: 32.0,
              ),
              style: ElevatedButton.styleFrom(
                fixedSize: const Size(75, 75),
                shape: const CircleBorder()
              )
            ),
            ElevatedButton(
              onPressed: ()=> {}, 
              child: const Icon(
                Icons.camera,
                color: Colors.white,
                size: 32.0,
              ), 
              style: ElevatedButton.styleFrom(
                fixedSize: const Size(75, 75),
                shape: const CircleBorder()
              )
            ),
            ElevatedButton(
              onPressed: () async {
                
              },
              child: const Icon(
                Icons.contacts,
                color: Colors.white,
                size: 32.0,
              ), 
              style: ElevatedButton.styleFrom(
                fixedSize: const Size(75, 75),
                shape: const CircleBorder()
              )
            )
          ],
        )
      ]),
    );
  }
}

class _BottomSheetContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 300,
      child: Column(
        children: const [
          SizedBox(
            height: 35,
            child: Center(
              child: Text(
                'Modal Bottom',
                textAlign: TextAlign.center,
              ),
            ),
          ),
          Divider(thickness: 1),
          Text('This is how a modal looks at the bottom.'),
          Text('Lorem ipsum dolor sit amet consectetur adipisicing elit.'),
          Text('Necessitatibus ullam iusto quae quod, eum fugit!.'),
        ],
      ),
    );
  }
}

