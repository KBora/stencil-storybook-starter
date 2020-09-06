import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'booster-card',
  styleUrl: 'booster-card.css',
  shadow: true,
})
export class BoosterCard {

    @Prop()
    cardTitle: string;

  render() {
    return (
      <Host>
        hello {this.cardTitle}
      </Host>
    );
  }

}
