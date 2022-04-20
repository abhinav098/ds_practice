// strategy
// 1 set for available spots
// 1 set for reserved spots
// For multiple entrances, using MinHeaps (Let's say 4 entrances A, B, C, D) that will have the spots setup in terms of distance from the entrance (i.e. we'll be getting the nearest parking spot each time when we extract minimum)
// 1 map of minheaps, key would be entrance
// and value will be minHeap depending on entrance. {A: MinHeapA , B: MinHeapB, C: MinHeapC D: MinHeapD}

class ParkingSpot {}

class HandicappedParkingSpot {}

class CompactParkingSpot {}

class LargeParkingSpot {}

class MotorCycleParkingSpot {}
