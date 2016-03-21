import {Component} from 'angular2/core';
import {BootstrapCollapse} from '../shared/directives/bootstrap-collapse.directive';

class CollapseCards {
	 
  	static get annotations() {
        return [
            new Component ({
                selector: "bs-collapse-cards",
                templateUrl: "public/src/app/collapse-cards/collapse-cards.component.html",
                directives: [BootstrapCollapse]
            })
        ];
    }
	
	constructor() {
		this.data = [
			{
				'title':'Kelarth The Scary', 
				'content':`Fierce ebony eyes sit buried within the creature's rounded, thorny skull, which gives the creature a very ominous looking appearance. Several small central horns sit atop its head, just above its long, angular ears. Several rows of small horns runs down the sides of each of its jaw lines. Its nose is large and has two wide, oval nostrils and there are small crystal growths on its chin. Four large teeth poke out from the side of its mouth and give a slight hint at the terror hiding inside.  A strong neck runs down from its head and into a long body. The top is covered in reptilian skin and a row of thick armor plating runs down its spine. Its bottom is covered in crystal-like skin and is colored slightly lighter than the rest of its body. Two bulky limbs carry its body and allow the creature to stand dignified and tall. Each limb has 3 digits, each of which end in thick nails seemingly made of bone.  Massive wings grow starting from just below its shoulders and end at its hips. The wings are curved, bone structures are clearly visible through the thin layer of skin and sharp, spiky scales cover the top of each visible bone.  Its wide tail ends in a seemingly fluffy tip and is covered in the same reptilian skin as its body.`
			},
			{
				'title':'Rumalth The Evil One', 
				'content':`Tranquil flaming eyes sit narrowly within the creature's hard, narrow skull, which gives the creature a fierce looking appearance. Several enormous central horns sit atop its head, just above its narrow, round ears. Several rows of crystal growths runs down the sides of each of its jaw lines. Its nose is large and has two small, oval nostrils and there's a crystal growth on its chin. Several sharp teeth poke out from the side of its mouth and reveal only a fraction of the terror hiding inside.  A strong neck runs down from its head and into a bulky body. The top is covered in curved scales and rows of thick armor plating runs down its spine. Its bottom is covered in reptilian skin and is colored slightly lighter than the rest of its body. Four long limbs carry its body and allow the creature to stand graceful and imposing. Each limb has 3 digits, each of which end in massive nails seemingly made of onyx.  Delicate wings grow starting from its shoulders and end at its hips. The wings are almost butterfly-like, the edges of the skin inside the wings are tattered and damaged and small, sharp tips grow from each ending like massive spears.  Its elegant tail ends in a scythe-like blade and is covered in the same curved scales as its body.`
			}, 
			{
				'title':'Vanlith The Powerful', 
				'content':`Angry fiery eyes sit high within the creature's rounded, thorny skull, which gives the creature a frightening looking appearance. Several small central horns sit atop its head, just above its enormous, warped ears. Several rows of tendrils runs down the sides of each of its jaw lines. Its nose is round and has two large, angular nostrils and there are small tendrils on its chin. A few sharp teeth poke out from the side of its mouth and reveal only a fraction of the terror hiding inside.  A thick neck runs down from its head and into a snake-like body. The top is covered in rounded scales and a row of small fan-like growths runs down its spine. Its bottom is covered in stone-like scales and is colored darker than the rest of its body. Six mighty limbs carry its body and allow the creature to stand poised and graceful. Each limb has 3 digits, each of which end in pointy talons seemingly made of obsidian.  Slender wings grow starting from just below its shoulders and end all the way down at its pelvis. The wings are scythe-shaped, bone structures are clearly visible through the thin layer of skin and curved talons grow from each ending like giant scythes.  Its spiky tail ends in a gentle point and is covered in the same rounded scales as its body.`
			}
		];
	}

}

export {CollapseCards};