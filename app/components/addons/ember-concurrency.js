import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';
import { timeout } from 'ember-concurrency';

export default class AddonsEmberConcurrencyComponent extends Component {
  @tracked count = 0;

  @task *doSomething() {
    yield timeout(1000);
    this.count++;
  }
}
