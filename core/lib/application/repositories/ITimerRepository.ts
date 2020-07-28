import { Timer } from "../../domain";

export abstract class ITimerRepository {
  abstract async execute(timer: Timer): Promise<null>;
}
