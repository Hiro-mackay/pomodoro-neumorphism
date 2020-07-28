import { Timer } from "../../../domain";
import { ITimerRepository } from "../../repositories";

export class TimerInteractor {
  private timerRepository: ITimerRepository;

  constructor(TimerRepository: ITimerRepository) {
    this.timerRepository = TimerRepository;
  }

  async start(timer: Timer): Promise<Timer> {
    try {
      timer.start();
      await this.timerRepository.execute(timer);
      return timer;
    } catch (error) {
      throw error;
    }
  }

  async stop(timer: Timer): Promise<Timer> {
    try {
      timer.stop();
      await this.timerRepository.execute(timer);
      return timer;
    } catch (error) {
      throw error;
    }
  }

  async reset(timer: Timer): Promise<Timer> {
    try {
      timer.reset();
      await this.timerRepository.execute(timer);
      return timer;
    } catch (error) {
      throw error;
    }
  }

  async LoopToggle(timer: Timer): Promise<Timer> {
    try {
      timer.loopToggle();
      await this.timerRepository.execute(timer);
      return timer;
    } catch (error) {
      throw error;
    }
  }

  async changeTimerType(timer: Timer): Promise<Timer> {
    try {
      timer.changeTimerType();
      await this.timerRepository.execute(timer);
      return timer;
    } catch (error) {
      throw error;
    }
  }
}
