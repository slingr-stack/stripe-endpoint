package io.slingr.endpoints.stripe;

import java.util.ArrayList;

//Implementation of https://en.wikipedia.org/wiki/Exponential_backoff#Example
public class ExponentialBackoffService {

    public static void waitRandom(int retryNum, int slotTime) throws InterruptedException {
        int amountOfWaitTimes = (int) Math.pow(2,retryNum) - 1;
        ArrayList<Integer> possibleWaitTimes = new ArrayList<>();
        for (int k = 0;k <= amountOfWaitTimes; k++) { //k
            possibleWaitTimes.add(k * slotTime);
        }
        Thread.sleep(possibleWaitTimes.get((int) Math.round(Math.random()*amountOfWaitTimes)));
        return;
    }

    public static boolean shouldRetry(int retryNum, int maxRetries) {
        return retryNum <= maxRetries ? true : false;
    }
}
