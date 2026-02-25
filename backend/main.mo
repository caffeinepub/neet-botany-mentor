import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Order "mo:core/Order";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  type DemoBooking = {
    name : Text;
    phone : Text;
    preferredTime : Text;
    timestamp : Int;
  };

  module ContactSubmission {
    public func compareByTimestamp(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Nat.compare(a.timestamp.toNat(), b.timestamp.toNat());
    };
  };

  module DemoBooking {
    public func compareByTimestamp(a : DemoBooking, b : DemoBooking) : Order.Order {
      Nat.compare(a.timestamp.toNat(), b.timestamp.toNat());
    };
  };

  let contactSubmissions = Map.empty<Int, ContactSubmission>();
  let demoBookings = Map.empty<Int, DemoBooking>();

  var nextContactId : Int = 0;
  var nextDemoId : Int = 0;

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or phone.isEmpty() or message.isEmpty()) {
      Runtime.trap("All contact form fields must be filled out");
    };

    let submission : ContactSubmission = {
      name;
      email;
      phone;
      message;
      timestamp = nextContactId;
    };

    contactSubmissions.add(nextContactId, submission);
    nextContactId += 1;
  };

  public shared ({ caller }) func bookDemo(name : Text, phone : Text, preferredTime : Text) : async () {
    if (name.isEmpty() or phone.isEmpty() or preferredTime.isEmpty()) {
      Runtime.trap("All demo booking fields must be filled out");
    };

    let booking : DemoBooking = {
      name;
      phone;
      preferredTime;
      timestamp = nextDemoId;
    };

    demoBookings.add(nextDemoId, booking);
    nextDemoId += 1;
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort(ContactSubmission.compareByTimestamp);
  };

  public query ({ caller }) func getAllDemoBookings() : async [DemoBooking] {
    demoBookings.values().toArray().sort(DemoBooking.compareByTimestamp);
  };
};
